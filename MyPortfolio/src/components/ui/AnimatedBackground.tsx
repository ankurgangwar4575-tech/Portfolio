export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <div className="grid-overlay" />
      <div className="circuit-board">
        <span className="circuit-line line-a" />
        <span className="circuit-line line-b" />
        <span className="circuit-line line-c" />
        <span className="circuit-node node-a" />
        <span className="circuit-node node-b" />
        <span className="circuit-node node-c" />
      </div>
      <div className="code-cloud">
        <span className="code-fragment fragment-one">&lt;/&gt;</span>
        <span className="code-fragment fragment-two">const</span>
        <span className="code-fragment fragment-three">{'{ }'}</span>
        <span className="code-fragment fragment-four">01</span>
        <span className="code-fragment fragment-five">function()</span>
        <span className="code-fragment fragment-six">npm run build</span>
      </div>
      <div className="floating-orb orb-one" />
      <div className="floating-orb orb-two" />
      <div className="floating-cube cube-one" />
      <div className="floating-cube cube-two" />
    </div>
  )
}
