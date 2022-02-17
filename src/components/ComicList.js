// Refactored file for syntax purposes
const ComicList = ({object}) => {
	return(
		<div>
			{ object.items.slice(0, 5).map((item) => {
				return <p key={item.name}> - {item.name}</p>
			})}
		</div>
	);
}

export default ComicList;