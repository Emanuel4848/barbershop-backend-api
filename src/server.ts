import express, { application } from "express"; //importa express
import userRoutes from "./modules/users/user.routes";
import seriviceRouter from "./modules/services/service.routes";


const app = express()  //es mi API (agrego rutas, middlewares, codngis)





//rutas API
app.use(express.json())  //cuando venga JSON, conviertelo automáticamente a obj js"
app.use(userRoutes);
app.use(seriviceRouter);







app.get("/", (req, res) => {    //al entrar a localhost, ejeuctar la funcion.
    res.json({
        message: "Backend Corriendo"
    });
});

const PORT = 3000;      //puerto para escuchar request

app.listen(PORT, () => {        //inicia el servidor
    console.log(`servidor corriendo en el puerto ${PORT}`);
});





