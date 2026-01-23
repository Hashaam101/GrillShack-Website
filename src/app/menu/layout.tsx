import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Menu | Grill Shack West Drayton",
    description: "Bold flavors, no shortcuts, everything made fresh to order. From signature smash burgers to flame-grilled platters, veggie options to indulgent desserts—we've built a menu that hits every craving, every time.",
};

export default function MenuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
