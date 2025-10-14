import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Empresa de Tecnologia',
      role: 'Desenvolvedor Backend Sênior',
      period: '2022 - Presente',
      description: 'Desenvolvimento e manutenção de sistemas SaaS escaláveis, implementação de arquitetura de microserviços, automação de processos com CI/CD e gestão de infraestrutura AWS.',
      technologies: ['Node.js', 'Python', 'AWS', 'Docker', 'Terraform', 'PostgreSQL'],
    },
    {
      company: 'Startup de Inovação',
      role: 'DevOps Engineer',
      period: '2020 - 2022',
      description: 'Automação de infraestrutura com Terraform, implementação de pipelines CI/CD, monitoramento e observabilidade de aplicações em produção.',
      technologies: ['AWS', 'Terraform', 'GitHub Actions', 'Docker', 'Kubernetes', 'Prometheus'],
    },
    {
      company: 'Consultoria de Software',
      role: 'Desenvolvedor Full Stack',
      period: '2018 - 2020',
      description: 'Desenvolvimento de aplicações web completas, APIs REST, integração com serviços externos e otimização de performance.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MySQL', 'MongoDB', 'Redis'],
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Minha trajetória profissional e principais conquistas
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <div className="md:ml-20 bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

