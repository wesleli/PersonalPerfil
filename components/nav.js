import Link from 'next/link';

export default function Nav() {
  return (
    <div>
      <div className="absolute z-30 h-20 w-screen bg-gradient-to-b from-black items-end">
        <div className="absolute bottom-0 left-0 w-screen px-24 ">
          <ul className="flex flox-row space-x-4 text-white font-fondamento justify-end">
            <li>
              <Link href="/">PROJETOS</Link>
            </li>
            <li>
              <Link href="/about">
                <a>ENTRE EM CONTATO</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
