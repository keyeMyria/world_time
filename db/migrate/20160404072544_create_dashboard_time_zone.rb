class CreateDashboardTimeZone < ActiveRecord::Migration
  def change
    create_table :dashboard_cities do |t|

      t.integer :dashboard_id
      t.integer :city_id

      t.timestamps null: false
    end
  end
end
