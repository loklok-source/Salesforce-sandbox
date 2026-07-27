let settings = {};

async function loadSettings() {
    const response = await fetch("data/settings.csv");
    const text = await response.text();

    const rows = text.trim().split("\n");

    rows.slice(1).forEach(row => {
        const comma = row.indexOf(",");
        const key = row.substring(0, comma).trim();
        let value = row.substring(comma + 1).trim();

        value = value.replace(/^"|"$/g, "");

        settings[key] = value;
    });

    renderTrainingPanel();
}

function renderTrainingPanel() {

    const objectives = settings.Objectives
        .split("|")
        .map(item => `<li>${item}</li>`)
        .join("");

    document.getElementById("training-panel").innerHTML = `
        <div class="training-card">

            <details open>
                <summary><strong>${settings.BeforeStartTitle}</strong></summary>
                <p>${settings.BeforeStart}</p>
            </details>

            <details>
                <summary><strong>${settings.ObjectivesTitle}</strong></summary>
                <ul>${objectives}</ul>
            </details>

            <details>
                <summary><strong>${settings.ImportantTitle}</strong></summary>
                <p>${settings.Important}</p>
            </details>

        </div>
    `;
}

window.addEventListener("DOMContentLoaded", loadSettings);
