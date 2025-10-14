import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ponickrenan@gmail.com',
      link: 'mailto:ponickrenan@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/renan-ponick-9107a5174',
      link: 'https://www.linkedin.com/in/renan-ponick-9107a5174/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/renanponick',
      link: 'https://github.com/renanponick',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 (47) 99292-3380',
      link: 'https://wa.me/5547992923380',
    },
  ];

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aberto a novas oportunidades e colaborações. Vamos conversar!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{method.label}</h3>
                    <p className="text-muted-foreground text-sm">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-4">Pronto para começar um projeto?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Entre em contato e vamos transformar suas ideias em realidade
            </p>
            <Button
              size="lg"
              onClick={() => window.open('https://wa.me/5547992923380', '_blank')}
              className="group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5547992923380"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl z-50 transition-colors"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </section>
  );
};

export default Contact;

