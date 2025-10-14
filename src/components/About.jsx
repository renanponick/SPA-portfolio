import { motion } from 'framer-motion';
import { Code2, Server, Shield, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Backend Development',
      description: 'Desenvolvimento de APIs robustas e escaláveis',
    },
    {
      icon: Server,
      title: 'DevOps & Cloud',
      description: 'Infraestrutura como código e automação',
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Práticas de segurança e pentests',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimização e alta disponibilidade',
    },
  ];

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sou Coordenador de Software com experiência em equipes multidisciplinares,
            liderando projetos em Flutter, React (TypeScript) e Node.js (TypeScript),
            integrando todo o ecossistema — do frontend à infraestrutura em AWS.
          </p>
          <p className="text-xl mt-5 text-muted-foreground max-w-3xl mx-auto">
            Liderar equipes é sobre criar clareza, inspirar confiança e remover obstáculos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

