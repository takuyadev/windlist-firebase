import { Link } from 'react-router-dom'

function Header(){
    return (
        <header className="sticky flex w-full p-4 justify-between border-b-2 border-b-gray-100 text-gray-500">
            <img className="w-16" src="./images/tailwind_logo.svg"/>
            <nav className="flex gap-8 ">
                <Link to="/Login">Login</Link>
                <Link to="/TodoList">Todo List</Link>
            </nav>
        </header>
    )
}

export default Header