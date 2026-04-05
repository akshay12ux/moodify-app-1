export default function EventCard({ title }: { title: string }) {
return (
<div className="border p-3 m-2 shadow">
<h3>{title}</h3>
</div>
);
}
