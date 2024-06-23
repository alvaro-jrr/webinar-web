import { Menu } from "lucide-react";
import { type ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { Button } from "./ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";

export function Drawer({ children }: { children: ReactNode | ReactNode[] }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost">
					<Menu className="h-4 w-4" />

					<span className="sr-only">Menú</span>
				</Button>
			</SheetTrigger>

			<SheetContent>
				<SheetHeader className="p-0">
					<SheetTitle className="sr-only">Menú</SheetTitle>

					<SheetDescription className="sr-only">
						Navega a través de las diferentes opciones de la página
					</SheetDescription>
				</SheetHeader>

				{children}
			</SheetContent>
		</Sheet>
	);
}

export function DrawerItem({ title, to }: { title: string; to: string }) {
	return (
		<NavLink
			className="flex items-center gap-4 px-2.5 py-2 font-medium text-muted-foreground hover:text-foreground"
			to={to}
		>
			{title}
		</NavLink>
	);
}
