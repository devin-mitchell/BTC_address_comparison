import '@/app/ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`font-sans antialiased'`}>{children}</div>
  );
}

