import {UserCircleIcon, UsersIcon, ClipboardListIcon} from '@heroicons/react/outline'

import StatsCards from "../components/StatsCards";

const stats = [
    {id: 1, name: 'Orders', stat: '71', icon: ClipboardListIcon, href: '/orders'},
    {id: 2, name: 'Clients', stat: '24', icon: UsersIcon, href: '/clients'},
    {id: 3, name: 'Users', stat: '7', icon: UserCircleIcon, href: '/users'},
]


export default function Dashboard() {
    return (
        <div className="px-4 py-8 sm:px-0">

            <StatsCards stats={stats}/>


            {/*<div className="bg-white overflow-hidden shadow rounded-lg">*/}
            {/*    <div className="px-4 py-5 sm:p-6">*/}

            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}