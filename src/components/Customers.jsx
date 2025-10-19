import { customers } from '@/data/customers'
import { useTheme } from '@/hooks/useTheme';

export default function Customers() {
  const { theme } = useTheme();

  return (
    <section
      id='customers'
      key='customers'
      className="pt-20 px-4 bg-muted/30"
    >
        <div className='container mx-auto text-center'>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Clientes que confiam no meu serviço</h2>
          <div className="flex flex-wrap justify-center gap-5 md:gap-15">
            {customers.map(customer => (
              <div key={customer.id} className="w-60 h-30 flex items-center justify-center">
                <img src={ theme === 'dark'
                  ? customer.logoDark
                  : customer.logoLight
                } alt={`Logo ${customer.name}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}
