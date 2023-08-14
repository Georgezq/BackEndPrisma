import { Router } from "express";
import { prisma } from '../db.js';
import { cryptPassword, comparePass } from "../helpers/textCrypt.js";

const router = Router();

//NOTE - Obtener usuarios
router.get('/users', async (req, res) => {
    try {

        const users = await prisma.usuarios.findMany()
        res.json(users);
        
    } catch (error) {

        res.json({error: 'An error occurs when trying to obtain the users'})

    }
})

//NOTE - Acceso de Usuario

router.post('/login', async (req, res) => {

    const { nombre, password } = req.body;

    try {

        const user = await prisma.usuarios.findFirst({
            where: {
                nombre: nombre,
            },
        });
    
        if (!user) 
            return res.status(404).json({ error: 'El usuario no se ha encontrado' });
    
        const passwordMatches = await comparePass(password, user.password);
    
        if (!passwordMatches) 
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        
    
        return res.json({ message: 'Inicio de sesión exitoso' });

    } catch (error) {

        return res.json({error})

    }

});

//NOTE - Creación de Usuarios

router.post('/users', async (req, res) =>{
    const { nombre, password, rol } = req.body;
    const passCrypt = await cryptPassword(password);

  try {

    const sameUser = await prisma.usuarios.findFirst({
        where: {
            nombre: nombre,
        }
    })

    if(sameUser)
        return res.status(404).json({error: "Este nombre de usuario ya existe"})

   const newUser = await prisma.usuarios.create({
       data: {
        nombre: nombre,
        password: passCrypt,
        rol: rol,
       }
    })

    res.json((newUser));

  } catch (error) {
         
      return res.json({error})

  }
  
});

//NOTE - Actualización de Usuario

router.put('/users/:id_user', async(req, res) =>{
    
    const { nombre, password, rol } = req.body;

    const passWCrypt = await cryptPassword(password);

    try {
        const updateUser = await prisma.usuarios.update({
            where: {
                id_user: parseInt(req.params.id_user),
            },
            data: {
                nombre: nombre,
                password: passWCrypt,
                rol: rol,
            }    
        })

        res.json((updateUser))

    } catch (error) {

        return res.json({error})

    }
  
});


//NOTE - Eliminación de Usuario

router.delete('/users/:id_user', async(req,res) => {

    try {
        const deleteUser = await prisma.usuarios.delete({
            where: {
                id_user: parseInt(req.params.id_user),
            },
        });
    
        if(!deleteUser)
            return res.status(404).json({error: "The user is not found" });
    
        return res.json(deleteUser);
    } catch (error) {

        return res.json({error})

    }
    
});

//NOTE - Busqueda de usuarios

router.get('/users/search', async (req, res) => {
    
    const { search } = req.body;

    try {
        const users = await prisma.usuarios.findMany({
            where: {
                OR: [
                    { nombre: { contains: search || '' } },
                    { rol: { contains: search || '' } },
                ],
            },
        });
    
        if (users.length === 0) {
            return res.status(404).json({ error: 'El usuario no se ha encontrado' });
        }
    
        return res.json(users);
    } catch (error) {

        return res.json({error})

    }
    
});

export default router;