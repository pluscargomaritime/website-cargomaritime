import type { SVGProps } from "react";

export function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 48 48">
      <g clipPath="url(#linkedin_svg__clip0)">
        <path
          d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46v41.07C0 46.445 1.584 48 3.544 48h40.903C46.406 48 48 46.444 48 44.54V3.46C48 1.547 46.406 0 44.447 0zM14.24 40.903H7.116V17.99h7.125v22.913zM10.678 14.87a4.126 4.126 0 0 1 0-8.25 4.126 4.126 0 0 1 0 8.25zm30.225 26.034h-7.116V29.765c0-2.653-.047-6.074-3.703-6.074-3.703 0-4.266 2.897-4.266 5.888v11.324h-7.116V17.99h6.826v3.131h.093c.947-1.8 3.272-3.703 6.732-3.703 7.209 0 8.54 4.744 8.54 10.913v12.572z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="linkedin_svg__clip0">
          <rect width="48" height="48" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
