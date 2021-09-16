interface User {
    name: string;
    image: string;
}
interface AvatarProps{
    user: User;
}

export function Avatar({user}:AvatarProps) {
    return (
        <div className="flex h-8">
            <img className="rounded-full" src={user.image} alt={user.name} />
        </div>
    )
}
