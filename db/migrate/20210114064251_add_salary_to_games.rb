class AddSalaryToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :salary, :integer
  end
end
