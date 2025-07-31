export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center bg-background px-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Well, this is awkward...</h1>
          <p className="text-xl text-muted-foreground">
            Lindot doesn't have any social media, but these buttons look too good not to use!
          </p>
          <p className="text-lg text-muted-foreground italic">
            (Psst... they don't actually go anywhere. It's our little secret!)
          </p>
        </div>
      </main>
    </div>
  )
}