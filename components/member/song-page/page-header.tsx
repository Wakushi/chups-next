interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center md:text-left">
      <h1 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-slate-300 mt-2">{description}</p>
    </div>
  )
}
