import api from "../services/api"

export default function Post(props) {
    // Functions
    async function deletePost(id) {
        await api.delete('/posts/delete', { data: { id: id } })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                props.setRemovePost(prevBool => !prevBool)
            })
    }

    return (
        <div className="border-b py-4">
            <div className="flex justify-between items-center">
                <h3>{props.post.title}</h3>
                {(props.myposts) && <button onClick={() => deletePost(props.post.id)} className="p-1 text-red-500 border border-red-500 transition-all hover:bg-red-500 hover:text-white">Deletar</button>}
            </div>
            <p>{props.post.content}</p>
            <small>{props.post.author}</small>
        </div>
    )
}