import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

import automotiveCapa from '../assets/automotive/capa-dark.png'
import bakeryCapa from '../assets/bakery/capa-light.png'
import barberCapa from '../assets/barber/capa-dark.png'
import chocolateCapa from '../assets/chocolate/capa-dark.png'
import oticaCapa from '../assets/otica/capa-light.png'
import petshopCapa from '../assets/petshop/capa-dark.png'
import salonCapa from '../assets/salon/capa-dark.png'
import shopcellCapa from '../assets/shopcell/capa-light.png'


const Projects = () => {
  const projects = [
    {
      title: "Oficina Mecânica",
      description: "Landing page moderna para oficina mecânica, com apresentação de serviços, agendamento e contato direto via WhatsApp.",
      image: automotiveCapa,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://renanponick.github.io/SPA-automotive/"
    },
    {
      title: "Padaria",
      description: "Site completo para padaria, com cardápio, galeria de fotos, sistema de carrinho para encomendas e integração com WhatsApp.",
      image: bakeryCapa,
      technologies: ["HTML", "CSS", "JavaScript", "E-commerce", "UI/UX"],
      liveUrl: "https://renanponick.github.io/SPA-bakery/"
    },
    {
      title: "Barber",
      description: "Landing page moderna e responsiva para barbearia, com design elegante e animações suaves. Possui comentários de clientes localização e Whatsapp.",
      image: barberCapa,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://renanponick.github.io/SPA-barber/"
    },
    {
      title: "Doceria",
      description: "Plataforma de doces artesanais com catálogo de brigadeiros, brownies, presentes e carrinho de compras com envio via WhatsApp.",
      image: chocolateCapa,
      technologies: ["HTML", "CSS", "JavaScript", "E-commerce", "UI/UX"],
      liveUrl: "https://renanponick.github.io/SPA-chocolate/"
    },
    {
      title: "Ótica",
      description: "Plataforma web para ótica com catálogo de produtos, preços de lentes, marcas, comentários de clientes e localização.",
      image: oticaCapa,
      technologies: ["HTML", "CSS", "JavaScript", "E-commerce", "UI/UX"],
      liveUrl: "https://renanponick.github.io/SPA-otica/"
    },
    {
      title: "Petshop",
      description: "SPA para pet shop com serviços de banho, tosa, produtos, agendamentos e carrinho de compras integrado com WhatsApp.",
      image: petshopCapa,
      technologies: ["HTML", "CSS", "JavaScript", "E-commerce", "Responsive"],
      liveUrl: "https://renanponick.github.io/SPA-petshop/"
    },
    {
      title: "Salão de Beleza",
      description: "Website profissional para salão de beleza, com galeria de serviços, sistema de agendamento e carrinho de compras.",
      image: salonCapa,
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX", "E-commerce"],
      liveUrl: "https://renanponick.github.io/SPA-salon/"
    },
    {
      title: "Loja de Celular",
      description: "Loja de celulares e acessórios, com catálogo de produtos, conserto de aparelhos, carrinho de compras e integração com WhatsApp.",
      image: shopcellCapa,
      technologies: ["HTML", "CSS", "JavaScript", "E-commerce", "Responsive"],
      liveUrl: "https://renanponick.github.io/SPA-shopcell/"
    }
  ]

  return (
    <section id="projetos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alguns dos meus trabalhos e projetos pessoais
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all group w-full sm:w-[45%] lg:w-[30%] max-w-[600px]"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-150 transition-transform duration-800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

