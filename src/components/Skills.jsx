import { motion } from 'framer-motion';
import { Code, Cloud, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Linguagens de Programação',
      skills: [
        'JavaScript / TypeScript',
        'Python',
        'Java',
        'SQL / PL/pgSQL / MySQL',
        'Shell Script (Bash)',
      ],
    },
    {
      icon: Cloud,
      title: 'Infra & Cloud',
      skills: [
        'AWS (EC2, RDS, S3, ECS, IAM)',
        'Route53, Lambda',
        'Terraform (IaC)',
        'Docker e Docker Compose',
        'Linux / Ubuntu Server',
        'Nginx / PM2',
        'GitHub Actions / CI-CD',
      ],
    },
    {
      icon: Layers,
      title: 'Arquitetura & DevOps',
      skills: [
        'Microserviços',
        'APIs REST e GraphQL',
        'Clean Architecture / MVC',
        'CI/CD pipelines',
        'Segurança e Pentests',
        'Observabilidade (logs, monitoramento)',
      ],
    },
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

