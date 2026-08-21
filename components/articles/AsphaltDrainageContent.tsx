export function AsphaltDrainageContent() {
  const listItemClass =
    "relative mb-3 pl-7 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary";

  return (
    <article className="mx-auto max-w-[70ch] font-body text-lg leading-loose text-on-surface-variant">
      <p className="mb-8 text-xl leading-relaxed font-medium text-on-surface">
        When property owners consider paving projects, the focus is often on the sleek, black finish of fresh asphalt. However, the true longevity and structural integrity of any paved surface lie hidden beneath the finish—specifically in how it handles water. Proper drainage is the unsung hero of durable paving.
      </p>

      <h2 className="mt-12 mb-6 font-headline text-3xl font-bold text-on-surface">Water: Asphalt&apos;s Silent Adversary</h2>
      <p className="mb-6">
        Asphalt is inherently durable, but standing water is its greatest weakness. When water pools on a surface, it slowly seeps into the microscopic pores of the pavement. Over time, this moisture compromises the binding agents that hold the aggregate together, leading to a breakdown known as raveling.
      </p>
      <p className="mb-6">
        In colder climates, this problem is exponentially worse. The freeze-thaw cycle turns trapped moisture into expanding ice, forcefully breaking the asphalt apart from the inside out, creating the perfect conditions for potholes.
      </p>

      <blockquote className="my-10 rounded-r-xl border-l-4 border-primary bg-surface-container-low p-6 pl-6 font-headline text-xl text-on-secondary-container italic shadow-[0_4px_20px_rgba(46,50,48,0.06)]">
        &ldquo;A perfectly laid driveway without a drainage plan is simply a countdown to premature failure. Water management must be designed into the foundation.&rdquo;
      </blockquote>

      <h3 className="mt-10 mb-5 font-headline text-2xl font-bold text-on-surface">Key Elements of Effective Drainage Design</h3>
      <p className="mb-6">
        At Terra Paving, our organic approach means working with the natural topography of your land, rather than fighting against it. A well-designed drainage system incorporates several essential components:
      </p>
      <ul className="mb-6 list-none pl-0">
        <li className={listItemClass}><strong>Proper Grading and Sloping:</strong> The surface must have a subtle, calculated crown or cross-slope (typically 1% to 2%) to direct water toward the edges.</li>
        <li className={listItemClass}><strong>Robust Sub-base Preparation:</strong> A compacted, crushed stone foundation allows moisture that penetrates the surface to drain away from the soil beneath, preventing frost heave.</li>
        <li className={listItemClass}><strong>Strategic Catch Basins:</strong> For larger surfaces, installing grates and underground piping is necessary to manage high volumes of runoff during severe storms.</li>
        <li className={listItemClass}><strong>French Drains and Swales:</strong> Natural-looking trenches filled with gravel that subtly redirect groundwater away from the pavement edges, protecting the perimeter.</li>
      </ul>

      <h2 className="mt-12 mb-6 font-headline text-3xl font-bold text-on-surface">Protecting Your Investment</h2>
      <p className="mb-6">
        Investing in a high-quality paving project involves more than just the top layer. By ensuring that your contractor understands and prioritizes water management, you safeguard your driveway or parking lot against early degradation. Regular maintenance, such as clearing debris from drains and timely sealcoating, further extends the life of your surface, keeping it resilient and beautiful for years to come.
      </p>
    </article>
  );
}
