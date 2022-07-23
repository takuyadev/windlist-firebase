import ListItem from '../components/ListItem'
import TextField from '../components/TextField'
import Button from '../components/Button'

export default function TodoList(){
    return (
        <div className="flex flex-col gap-8">
            <form className="flex w-full p-0 gap-4">
                <TextField />
                <Button />
            </form>
            <hr/>
            <ul className='flex flex-col gap-4'> 
                <ListItem />
            </ul>
        </div>
    )
}