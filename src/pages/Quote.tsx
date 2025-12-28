import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  CalendarIcon,
  Trash2,
  Check,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

// Validation Schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  phone: z.string().min(10, { message: 'Telefone inválido.' }),
  eventType: z.string().min(1, { message: 'Selecione o tipo de evento.' }),
  eventDate: z.date({ required_error: 'Data do evento é obrigatória.' }),
  guests: z.string().min(1, { message: 'Informe a quantidade de convidados.' }),
  message: z.string().optional(),
})

export default function Quote() {
  const { items, removeItem, totalItems, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      guests: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    console.log(values)
    console.log(items)

    // Success animation handling
    setIsSubmitted(true)
    clearCart()
    toast.success('Orçamento solicitado com sucesso!')
  }

  const nextStep = () => {
    if (step === 1) setStep(2)
    if (step === 2) setStep(3)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-lg mx-auto animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-4xl font-bold mb-4">Obrigado!</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Recebemos sua solicitação de orçamento. Nossa equipe entrará em
            contato via WhatsApp ou Email em até 24 horas para confirmar os
            detalhes.
          </p>
          <Link to="/">
            <Button className="rounded-full px-8">Voltar para Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-muted/20">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
            Solicitar Orçamento
          </h1>
          <p className="text-muted-foreground">
            Planeje seu evento em 3 passos simples
          </p>
        </div>

        {/* Steps Indicator */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors',
                    step === s
                      ? 'bg-primary text-primary-foreground'
                      : step > s
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500',
                  )}
                >
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={cn(
                      'w-12 h-1 bg-gray-200 mx-2',
                      step > s ? 'bg-green-500' : '',
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* STEP 1: Event Details */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl font-bold font-serif mb-4">
                      Detalhes do Evento
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de Evento</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="casamento">
                                  Casamento
                                </SelectItem>
                                <SelectItem value="15anos">15 Anos</SelectItem>
                                <SelectItem value="infantil">
                                  Festa Infantil
                                </SelectItem>
                                <SelectItem value="corporativo">
                                  Corporativo
                                </SelectItem>
                                <SelectItem value="outro">Outro</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Número de Convidados</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mini">
                                  Até 50 pessoas
                                </SelectItem>
                                <SelectItem value="small">
                                  50 - 100 pessoas
                                </SelectItem>
                                <SelectItem value="medium">
                                  100 - 200 pessoas
                                </SelectItem>
                                <SelectItem value="large">
                                  Mais de 200 pessoas
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Data do Evento</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={'outline'}
                                  className={cn(
                                    'w-full pl-3 text-left font-normal',
                                    !field.value && 'text-muted-foreground',
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, 'PPP', { locale: ptBR })
                                  ) : (
                                    <span>Selecione uma data</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() ||
                                  date < new Date('1900-01-01')
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="rounded-full"
                      >
                        Próximo <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Sweets Selection */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold font-serif">
                        Seus Doces ({totalItems})
                      </h2>
                      <Link to="/menu">
                        <Button variant="outline" size="sm">
                          Adicionar mais doces
                        </Button>
                      </Link>
                    </div>

                    {items.length === 0 ? (
                      <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-lg">
                        <p className="text-muted-foreground mb-4">
                          Nenhum doce selecionado ainda.
                        </p>
                        <Link to="/menu">
                          <Button className="rounded-full">
                            Ir para o Cardápio
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {items.map((item) => (
                          <div
                            key={item.product.id}
                            className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border"
                          >
                            <img
                              src={item.product.imageUrl}
                              alt={item.product.name}
                              className="w-16 h-16 rounded-md object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-bold text-sm">
                                {item.product.name}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {item.quantity} unidades (Min:{' '}
                                {item.product.minOrder})
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.product.id)}
                              className="text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-between mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="rounded-full"
                      >
                        <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="rounded-full"
                      >
                        Próximo <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact Info */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl font-bold font-serif mb-4">
                      Seus Dados de Contato
                    </h2>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>WhatsApp/Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="(11) 99999-9999" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Observações Adicionais (Opcional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tem alguma dúvida ou pedido especial?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="rounded-full"
                      >
                        <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
                      </Button>
                      <Button
                        type="submit"
                        className="rounded-full bg-primary hover:bg-primary/90 text-white min-w-[150px]"
                      >
                        Finalizar Pedido
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
