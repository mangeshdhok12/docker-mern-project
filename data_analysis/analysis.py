import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

#TASK 17: Data Cleaning: Drop rows with missing values
def clean_data(csv_file):
    df = pd.read_csv(csv_file)
    cleaned_df = df.dropna()
    return cleaned_df

#TASK 18:  Data Manipulation: Get top 5 rows where a column has values greater than 30
def get_top_rows(df, column, value):
    filtered_df = df[df[column] > value]
    return filtered_df.head(5)

#TASK 19: Data Visualization: Bar chart of age distribution
def visualize_age_distribution(df, column='age'):
    plt.figure(figsize=(10, 6))
    df[column].value_counts().plot(kind='bar')
    plt.xlabel('Ages')
    plt.ylabel('Count')
    plt.title('Age Distribution')
    plt.show()

#TASK 20: Descriptive Statistics: Calculate mean, median, and std deviation of a column
def get_statistics(df, column):
    mean = df[column].mean()
    median = df[column].median()
    std_dev = df[column].std()
    return mean, median, std_dev

# Example Usage
if __name__ == "__main__":
    # Path to CSV file
    csv_file = 'data.csv'
    
    # Clean Data
    cleaned_data = clean_data(csv_file)
    
    # Data Manipulation
    top_rows = get_top_rows(cleaned_data, 'age', 30)
    print(top_rows)
    
    # Data Visualization
    visualize_age_distribution(cleaned_data, 'age')
    
    # Descriptive Statistics
    mean, median, std_dev = get_statistics(cleaned_data, 'age')
    print(f"Mean: {mean}, Median: {median}, Std Deviation: {std_dev}")
