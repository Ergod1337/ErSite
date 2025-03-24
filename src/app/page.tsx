import ELink from '@/components/ui/ELink';

export default function Home() {
    const pages = [
        { name: "Генератор паролей", path: "/password-generator", description: "Создавайте безопасные пароли для своих аккаунтов." },
        { name: "QR-код генератор", path: "/qrcode-generator", description: "Создавайте QR-коды для ссылок и текстов." }
    ];
    return (
        <>
            <header className="w-full h-20 bg-gray-900 flex justify-between items-center fixed top-0 z-1">
                <h1 className="text-xl text-gray-200 ml-8">Eragod&#39;s Website</h1>
                <nav>
                    <ul className="flex space-x-6 mr-8 text-gray-200">
                        <li><ELink href="#about" underline={true}>О сайте</ELink></li>
                        <li><ELink href="#contact" underline={true}>Контакты</ELink></li>
                    </ul>
                </nav>
            </header>
            <main className="w-full min-h-screen bg-gray-800 flex flex-col items-center justify-center pt-20">
                <h1 className="text-5xl text-gray-200 font-extrabold mb-6 drop-shadow-lg text-center">Добро пожаловать на сайт Eragod&#39;а!</h1>
                <p className="text-lg text-gray-200 mb-8 text-center">
                    Здесь вы найдете полезные инструменты для повседневных задач. Выберите нужный сервис и начните использовать!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-1/2">
                    {pages.map((page, index) => (
                        <ELink key={index} href={page.path} className="w-full">
                            <div className="bg-cyan-900 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1 text-white cursor-pointer flex flex-col items-center text-center w-full h-40">
                                <h2 className="text-2xl font-semibold mb-2">{page.name}</h2>
                                <p className="text-gray-400 text-sm">{page.description}</p>
                            </div>
                        </ELink>
                    ))}
                </div>
            </main>
        </>
    )
}
