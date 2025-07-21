export default function stateAandProps(){
    return(
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 pt-8">
            <h1 className="text-3xl font-bold text-center mb-2">React Props Demo</h1>
            <p className="text-1xl  text-center mb-2">How to use props in React</p>
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
                <div className="border rounded-md shadow p-4 w-64 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                        <h2 class="text-lg font-semibold">Alice Johnson</h2>
                    </div>
                    <p>Age: 28</p>
                    <p>Email: alice@example.com</p>
                    <p className="mt-2 font-medium text-green-600">Online</p>
                </div>
                <div className="border rounded-md shadow p-4 w-64 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="h-3 w-3 rounded-full bg-red-500"></span>
                        <h2 className="text-lg font-semibold">Bob Smith</h2>
                    </div>
                    <p>Age: 32</p>
                    <p>Email: bob@example.com</p>
                    <p className="mt-2 font-medium text-red-600">Offline</p>
                </div>
            </div>
        </div>
    )
}