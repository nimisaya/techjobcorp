class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.boolean :in_progress
      t.datetime :game_time
      t.integer :score

      t.timestamps
    end
  end
end
