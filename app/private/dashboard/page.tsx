import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Dashboard = () => {
    return(
        <div className="flex min-h-screen">
            <div className="flex-1 bg-gray-100 dark:bg-gray-950">
            <div className="p-6 grid gap-6">
                <div className="grid md:grid-ccols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                $50,235.19
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                +19.74% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">
                                Subscriptions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                +1974.23
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                +13.16% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">
                                Sales
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                +34,022
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                +24.59% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">
                                Active Now
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                543
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                +196 from last month
                            </p>
                        </CardContent>
                    </Card>

                </div>

                <div className="grid gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">
                                Recent Signups
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Plan</TableHead>
                                        <TableHead>Date</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-04-15</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-04-15</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-04-15</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-04-15</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-04-15</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-04-15</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-04-15</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-04-15</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Dashboard