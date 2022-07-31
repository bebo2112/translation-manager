import Table from "../components/Table";
import Pagination from "../components/Pagination";

const data = [
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        poNumber: '309/00115',
        orders: 12,
        status: <div className="text-green-500">Inactive</div>,
        actions: 'edit'
    },
]

const columns = [
    {title: "Name", field: "name"},
    {title: "Email", field: "email"},
    {title: "PO #", field: "poNumber"},
    {title: "Orders", field: "orders"},
    {title: "Status", field: "status"},
    {title: "", field: "actions"}
]

export default function Clients() {
    return (
        <div className="px-4 py-8 sm:px-0">

            <div className="bg-white my-5 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">

                    <div className="flex items-center">
                        <div className="flex-auto">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow-sm block sm:text-sm border-gray-300 rounded-md h-8"
                                placeholder="Search"
                            />
                        </div>

                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add client
                            </button>
                        </div>
                    </div>

                    <Table columns={columns} data={data}/>

                    <Pagination />
                </div>
            </div>
        </div>
    );
}