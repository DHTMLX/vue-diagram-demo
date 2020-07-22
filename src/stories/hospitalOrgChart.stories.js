import HospitalOrgChartCdn from "../components/hospitalOrgChart/HospitalOrgChartCdn";

export default {
  title: "Hospital Org Chart",
};

export const base = () => ({
  components: { HospitalOrgChartCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/hospitalOrgChart/HospitalOrgChartCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <HospitalOrgChartCdn></HospitalOrgChartCdn>
    </section>
  `,
});
