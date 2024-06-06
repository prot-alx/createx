import { tv } from 'tailwind-variants';

export const baseButton = tv({
    base: 'text-center relative font-semibold whitespace-nowrap align-middle outline-none inline-flex items-center justify-center select-none',
    variants: {
        size: {
            small: 'h-[36px]  w-[123px]',
            regular: 'h-[44px]  w-[166px] ',
            large: 'h-[52px] w-[179px]',
            //   square_xs: 'text-xs h-4 w-4 p-1',
            //   square_sm: 'text-sm h-6 w-6 p-1',
            //   square_md: 'text-base h-8 w-8 p-1',
            //   square_lg: 'text-lg h-10 w-10 p-1',
            //   square_xl: 'text-xl h-12 w-12 p-1',
        },
        vPadding: {
            xs: 'py-[4px]',
            sm: 'py-[8px]',
            md: 'py-[12px]',
            lg: 'py-[16px]',
        },
        vSpace: {
            xs: 'my-1',
            sm: 'my-2',
            md: 'my-4',
            lg: 'my-6',
        },
        HSpace: {
            xs: 'mx-1',
            sm: 'mx-2',
            md: 'mx-4',
            lg: 'mx-6',
        },
        align: {
            center: 'mx-auto',
            right: 'ml-auto',
            left: 'mr-auto',
            top: 'mb-auto',
            bottom: 'mt-auto',
        },
        rounded: {
            none: 'rounded-none',
            xs: 'rounded-[2px]',
            sm: 'rounded-[4px]',
            normal: 'rounded-[8px]',
            lg: 'rounded-[12px]',
            full: 'rounded-full',
        },
        behavior: {
            block: 'w-full',
        },
    },
});

export const solidButton = tv({
    extend: baseButton,
    variants: {
        color: {
            green:
                'bg-primary text-white shadow-[0px 4px 4px 4px rgba(0, 0, 0 / 0.25)] active:shadow-none active:translate-y-[5px]',
            teal: 'bg-[#0D9488] text-gray-100 shadow-teal active:shadow-none active:translate-y-[5px]',
            yellow:
                'bg-[#FFC700] text-gray-100 shadow-yellow active:shadow-none active:translate-y-[5px]',
            gray: 'bg-[#64748B] text-gray-100 shadow-blueGray active:shadow-none active:translate-y-[5px]',
        },
    },
});

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        boxShadow: {
            DEFAULT: '0 3px 0 #57a300',
            teal: '0 3px 0 #0F766E',
            yellow: '0 3px 0 #E49E00',
            blueGray: '0 3px 0 #475569',
            none: 'none',
        },
        extend: {},
    },
    plugins: [],
};

export const outlineButton = tv({
    extend: baseButton,
    base: 'ring-1',
    variants: {
        color: {
            green:
                'ring-[#58cc02] text-[#58cc02] shadow active:shadow-none active:translate-y-[5px]',
            teal: 'ring-[#0D9488] text-[#0D9488] shadow-teal active:shadow-none active:translate-y-[5px]',
            yellow:
                'ring-[#FFC700] text-[#FFC700] shadow-yellow active:shadow-none active:translate-y-[5px]',
            gray: 'ring-[#64748B] text-[#64748B] shadow-blueGray active:shadow-none active:translate-y-[5px]',
        },
    },
});

export const ghostButton = tv({
    extend: baseButton,
    variants: {
        color: {
            green: 'text-[#58cc02]',
            teal: 'text-[#0D9488]',
            yellow: 'text-[#FFC700]',
            gray: 'text-[#64748B]',
        },
    },
});
