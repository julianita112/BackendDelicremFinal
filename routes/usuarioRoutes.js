const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/registro', usuarioController.agregarUsuario);
router.post('/login', usuarioController.loginUsuario);
router.post('/recuperar_contrasena', usuarioController.recuperarContrasena);
router.post('/cambiar_contrasena', usuarioController.resetPassword);

// Rutas protegidas
router.get('/', authMiddleware.verifyToken, usuarioController.listarUsuarios);
router.get('/activos', authMiddleware.verifyToken, usuarioController.obtenerUsuariosActivos);
router.get('/:id', authMiddleware.verifyToken, usuarioController.obtenerUsuarioPorId);
router.put('/:id', authMiddleware.verifyToken, usuarioController.editarUsuario);
router.delete('/:id', authMiddleware.verifyToken, usuarioController.eliminarUsuario);
router.patch('/:id/estado', authMiddleware.verifyToken, usuarioController.cambiarEstadoUsuario);

module.exports = router;

