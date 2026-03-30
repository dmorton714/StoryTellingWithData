answers = {
    1: "B — Numerical continuous. Temperature can take any value within a range, including decimals.",
    2: "C — Categorical ordinal. A satisfaction rating has categories with a meaningful order.",
    3: "B — Histogram. A histogram is best for showing the distribution of a single numerical variable.",
    4: "C — Bar chart. A bar chart is best for comparing values across categories.",
    5: "D — Line chart. A line chart is best for showing change across an ordered sequence or over time.",
    6: "C — Scatter plot. A scatter plot is used to explore the relationship between two numerical variables.",
    7: "D — Bubble chart. A bubble chart is useful for exploring the relationship between three variables at once."
}

def get_answer(question_number):
    print(answers.get(question_number, "Answer not found."))