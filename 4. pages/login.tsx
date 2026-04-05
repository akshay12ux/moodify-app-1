export default function Login() {
return (
<div className="flex justify-center items-center h-screen">
<div>
<h2 className="text-xl font-bold">Login</h2>
<input placeholder="Email" className="border p-2 m-2" />
<input placeholder="Password" type="password" className="border p-2 m-2" />
<button className="bg-blue-500 text-white p-2">Login</button>
</div>
</div>
);
}
