import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  //Crear un 4 slides o mas de 3
  //Asignarles estilos y nuestro dieño personalizado
  //modificar alguna custom properti de algun elemento
  slides = [

    {
      title: "Las 3 Razas más Inteligentes y Leales",
      icon: "paw-outline",
      avatar: "https://png.pngtree.com/png-clipart/20230916/original/pngtree-stickers-featuring-a-group-of-cute-huskies-in-a-winterscape-clipart-png-image_12255878.png",
      image: "https://cvfaunia.com/wp-content/uploads/2023/07/grupo-perros-diversas-razas-tamanos-colores-mirando-camara-creada-ia-generativa-1024x683.jpg",
      description: "Las razas de perros más inteligentes son aquellas que destacan por su capacidad de aprendizaje, memoria y adaptabilidad. Entre ellas, se encuentran el Border Collie, el Golden Retriever y el Dobermann Pinscher, tres razas que se caracterizan por su alta inteligencia, lealtad y capacidad de trabajo."
      
    
    },
    {
      title: "Border Collie",
      icon: "medal-outline",
      avatar: "https://img.pikbest.com/origin/09/39/58/57IpIkbEsTJHf.png!w700wp",
      image: "https://media.istockphoto.com/id/1316582288/es/foto/hermoso-retrato-perro-raza-border-collie-en-el-suelo-marr%C3%B3n-con-su-palo.jpg?s=612x612&w=0&k=20&c=HJNcBQTlUVWEOR2QMNWwkKPzoPGnakOaHYJmslWFQbY=",
      description: "El Border Collie conocidos por sus habilidades excepcionales para resolver problemas, los Border Collies son altamente entrenables y pueden aprender y responder rápidamente a señales. Son superestrellas en competiciones de agilidad y obediencia y tienen una fuerte ética laboral."

    },
    {
      title: "Golden Retriever",
      icon: "ribbon-outline",
      avatar: "https://www.iconarchive.com/download/i143743/iconarchive/dog-breed/Golden-Retriever.1024.png",
      image: "https://images7.alphacoders.com/413/thumb-1920-413380.jpg",
      description: "EL Golden Retriever con su naturaleza gentil y capacidad para aprender rápidamente, los Golden Retrievers son relativamente fáciles de entrenar. Son leales, afectuosos y ansiosos por complacer, lo que los hace ideales para padres de perros primerizos."
    },
    {
      title: "Doberman",
      icon: "star-outline",
      avatar: "https://static.vecteezy.com/system/resources/previews/035/592/951/non_2x/ai-generated-color-pencil-sketch-of-a-doberman-pinscher-ai-generated-free-png.png",
      image: "https://www.elespectador.com/resizer/v2/XQ5OB4SRZ5B5LD7S7QIRCLHTVY.jpg?auth=a69edf8bc4a7bcb75af1f456d43fb78c7edb6559de6a1094499b5239d8bce5c0&width=910&height=606&smart=true&quality=70",
      description: "El Doberman con su excepcionalmente inteligentes, leales y entrenables, los Dobermann Pinschers destacan en competiciones de obediencia y trabajos policiales y militares. Son altamente perceptivos y curiosos, requiriendo mucho ejercicio y estimulación mental para prosperar."
    }

  ]
  constructor() {}

}
