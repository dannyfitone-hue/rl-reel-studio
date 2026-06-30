import Link from 'next/link';
export default function Nav(){return <div className="container nav"><Link href="/" className="brand">RL <span>REEL</span> STUDIO</Link><div><Link href="/dashboard">Dashboard</Link><Link href="/projects/new">New Project</Link><Link href="/auth" className="btn">Login</Link></div></div>}
