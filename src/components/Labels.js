export default function Labels(props) {
    return (
        <div className='labels'>
            <p className="title">{props.title}</p>
            <p className='person'>{props.person}</p>
        </div>
    )
}