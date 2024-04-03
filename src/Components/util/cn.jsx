export default function cn(...classes) {
	console.log(classes)
	console.log(classes.filter(Boolean).join(" "));
	return classes.filter(Boolean).join(" ");
}