import ELink from '@/components/ui/ELink';

export default function NotFound() {
    return (
        <main className='w-full flex flex-col items-center justify-center min-h-screen bg-gray-800 px-6'>
            <h1 className='text-6xl font-bold text-gray-200'>404</h1>
            <p className='text-xl text-gray-400 mt-4'>Страница не найдена</p>
            <ELink
                href='/'
                className='mt-6 px-6 py-3 bg-gray-700 text-white text-lg font-medium rounded-4xl shadow hover:bg-gray-600 transition'
            >
                Вернуться на главную
            </ELink>
        </main>
    );
}
