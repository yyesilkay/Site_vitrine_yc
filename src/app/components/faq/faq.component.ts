import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [RouterModule, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqs = [
    {
      question: "Quels sont vos délais pour la création d'un site internet ?",
      answer:
        "Un site internet vitrine d'une page peut être réalisé en quelques jours seulement, tandis qu'un site E-commerce avec de multiples fonctionnalités sur mesure pourrait nécessiter quelques mois de développement.Pour en savoir plus, nous vous proposons de nous contacter pour échanger sur  votre projet et nous serons en mesure de vous indiquer un délai plus précis en fonction du cahier des charges et de vos objectifs.",
      isOpen: false,
    },

    {
      question: "A qui s'adressent les services de Yesil Conseil ?",
      answer:
        "Les services de Yesil Conseil s'adressent aux entreprises et aux particuliers.",
      isOpen: false,
    },

    {
      question:
        ' Pour quels types de projets puis-je faire appel à Yesil Consei ?',
      answer:
        "Vous pouvez faire appel à Yesil Conseil pour le développement de sites e-commerce et vitrine, la maintenance de systèmes, la création d'applications mobiles, le conseil en transformation numérique, et l'intégration de nouveaux systèmes. Nous vous accompagnons dans tous vos projets informatiques pour optimiser vos processus et améliorer votre efficacité.",
      isOpen: false,
    },

    {
      question: 'Comment puis-je obtenir un devis ?',
      answer:
        'Pour obtenir un devis, rendez-vous sur notre <a href="/estimate_request">page dédiée</a>. Soyez le plus précis possible dans la description de votre besoin pour recevoir une réponse rapide et adaptée.',
      isOpen: false,
    },

    {
      question: 'Vos devis sont-ils payant ?',
      answer:
        "Pas du tout ! Quel que soit le service, nos devis sont entièrement gratuits et sans aucun engagement de votre part. Vous avez un projet de création site internet, n'hésitez pas à nous consulter et notre équipe d'experts prendra contact avec vous pour en discuter et vous apporter les solutions adaptées aux meilleur prix.",
      isOpen: false,
    },

    {
      question:
        'Comment puis-je vous contacter pour en savoir plus sur vos services ?',
      answer:
        "Vous pouvez nous contacter par téléphone, e-mail ou via notre <a href='/contact'>formulaire de contact</a> sur notre site web pour en savoir plus sur nos services et pour discuter de votre projet.",
      isOpen: false,
    },
  ];

  toggleAnswer(faq: any) {
    faq.isOpen = !faq.isOpen;
  }
}
