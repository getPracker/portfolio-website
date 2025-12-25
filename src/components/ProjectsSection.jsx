import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "AI SaaS Platform",
        description: "A comprehensive AI-powered SaaS platform featuring multiple AI tools, user authentication, and subscription management with modern UI/UX design.",
        image: "/projects/ai-saas-project.png",
        tags: ["Next.js", "OpenAI", "Stripe", "Prisma", "Tailwind"],
        demoUrl: "https://ai-saas-project-client.vercel.app/",
        githubUrl: "https://github.com/getPracker/ai-saas-project"
    },
    {
        id: 2,
        title: "Real-time Chat Application",
        description: "A modern real-time chat application with user authentication, message history, and responsive design for seamless communication.",
        image: "/projects/chat-app-project.png",
        tags: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
        demoUrl: "https://chat-app-client-ashy.vercel.app/login",
        githubUrl: "https://github.com/getPracker/chat-app"
    },
    {
        id: 3,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.",
        image: "/projects/e-commerce-project.png",
        tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        demoUrl: "https://e-commerce-project-frontend-omega.vercel.app/",
        githubUrl: "https://github.com/getPracker/e-commerce-project"
    },
];

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project is carefully created with 
                    attention to detail.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 card-hover backdrop-blur-sm">
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.src = "/projects/project_template.jpg";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-4">
                                        <a 
                                            href={project.demoUrl} 
                                            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105 transform" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={18}/>
                                            <span>Live Demo</span>
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105 transform" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={18}/>
                                            <span>Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/getpracker" target="_blank">
                        Check My Github <ArrowUpRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}