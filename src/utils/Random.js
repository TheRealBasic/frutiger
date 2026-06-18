export class RNG{constructor(seed=123456){this.s=seed>>>0}next(){this.s=(1664525*this.s+1013904223)>>>0;return this.s/4294967296}range(a,b){return a+(b-a)*this.next()}int(a,b){return Math.floor(this.range(a,b+1))}pick(a){return a[Math.floor(this.next()*a.length)]}chance(p){return this.next()<p}}
export function hash2(x,z,seed=0){let h=(x*374761393+z*668265263+seed*1442695041)>>>0;h=(h^(h>>>13))*1274126177;return (h^(h>>>16))>>>0}
export function smoothstep(a,b,x){const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t)}
