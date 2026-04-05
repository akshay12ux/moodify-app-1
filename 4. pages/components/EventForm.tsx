import { useState } from "react";

export default function EventForm() {
const [title, setTitle] = useState("");

return (
<div className="mt-5">
<input
placeholder="Event Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
className="border p-2"
/>
<button className="bg-green-500 text-white p-2 ml-2">
Add Event
</button>
</div>
);
}
