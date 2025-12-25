import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from '@/lib/utils'


export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            
        }, 1500)
    }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container max-auto mx-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunites.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col items-center space-y-8 pt-8">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>

                    <div className="w-full max-w-md mx-auto space-y-6">
                        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 w-full">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-center">
                                <h4 className="font-medium">Email</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:prakhar26june@gmail.com">
                                    prakhar26june@gmail.com
                                </a>
                            </div>
                            <div className="w-12"></div>
                        </div>
                        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 w-full">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-center">
                                <h4 className="font-medium">Phone</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors" href="tel:+919760434565">
                                    +91 9760434565
                                </a>
                            </div>
                            <div className="w-12"></div>
                        </div>
                        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 w-full">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-center">
                                <h4 className="font-medium">Location</h4>
                                <p className="text-muted-foreground">
                                    Gurugram, Haryana, IN
                                </p>
                            </div>
                            <div className="w-12"></div>
                        </div>
                    </div>

                    <div className="pt-8 text-center">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/getpracker/" target="_blank">
                                <Linkedin/>
                            </a>
                            <a href="https://www.instagram.com/getpracker/#" target="_blank">
                                <Instagram/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card pt-8 pb-8 px-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Send A Message</h3>

                    <form className="space-y-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                            <input 
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                              placeholder="Prakhar Gupta.."
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                            <input 
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                              placeholder="prakhar@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea 
                              id="message"
                              name="message"
                              required
                              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                              placeholder="Hi, I'd like to talk about..."
                            />
                        </div>
                        
                        <button type="submit" className={cn(
                            "cosmic-button w-full flex item-center justify-center gap-2",

                        )}>
                            Send Message
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </section>
}