package com.nuevastecnologias.uts.proyecto.Services.Implements;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nuevastecnologias.uts.proyecto.Entitys.Usuarios;
import com.nuevastecnologias.uts.proyecto.Repository.usuariosRepository;
import com.nuevastecnologias.uts.proyecto.Services.UsuarioService;
import java.security.MessageDigest;

@Service
public class usuariosServiceImpl implements UsuarioService {

    @Autowired
    usuariosRepository usuariosrepository;

    @Override
    public List<Usuarios> findAll() {
        return (List<Usuarios>) usuariosrepository.findAll();
    }

    @Override
    public Usuarios save(Usuarios usuarios) {
        usuarios.setPassword(hash(usuarios.getPassword()));
        return usuariosrepository.save(usuarios);
    }

    public static String hash(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(input.getBytes("UTF-8"));

            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void delete(Long id) {
        usuariosrepository.deleteById(id);
    }

    @Override
    public Usuarios update(Usuarios usuarios, Long id) {
        Optional<Usuarios> terceroOptional = usuariosrepository.findById(id);

        if (terceroOptional.isPresent()) {
            Usuarios terceroCurrent = terceroOptional.get();
            terceroCurrent.setDocument(usuarios.getDocument());
            terceroCurrent.setName(usuarios.getName());
            terceroCurrent.setLastname(usuarios.getLastname());
            terceroCurrent.setRole(usuarios.getRole());
            terceroCurrent.setPassword(usuarios.getPassword());
            usuariosrepository.save(terceroCurrent);
            return terceroCurrent;
        } else {
            return null;
        }
    }

    @Override
    public List<Usuarios> findUsuariosByTypeRol(String rol) {
        return usuariosrepository.findByTypeRol(rol);
    }

    @Override
    public void singUp(String cedula, String clave) {
        usuariosrepository.SingUpusuario(cedula);
        usuariosrepository.SingUppassword(clave);
        System.out.println("inicio sesion correcto");
    }

}
