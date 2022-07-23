using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DAL.Models
{
    public partial class ShopContext : DbContext
    {
        public ShopContext()
        {
        }

        public ShopContext(DbContextOptions<ShopContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderDetail> OrderDetails { get; set; }
        public virtual DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=B-217;Database=Shop;Trusted_Connection=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.CategoryCode)
                    .HasName("PK__Categori__371BA954F1D16A6E");

                entity.Property(e => e.CategoryName).HasMaxLength(50);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustId)
                    .HasName("PK__Customer__049E3A89FDFAA726");

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.Property(e => e.CustAddress).HasMaxLength(50);

                entity.Property(e => e.CustPassword).HasMaxLength(10);

                entity.Property(e => e.CustPhone).HasMaxLength(10);

                entity.Property(e => e.FirstName).HasMaxLength(10);

                entity.Property(e => e.LastName).HasMaxLength(10);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasKey(e => e.OrderCode)
                    .HasName("PK__Orders__999B52283437783A");

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.Property(e => e.OrderDate).HasColumnType("date");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustId)
                    .HasConstraintName("FK__Orders__CustID__6383C8BA");
            });

            modelBuilder.Entity<OrderDetail>(entity =>
            {
                entity.HasKey(e => e.OrderDetailsCode);

                entity.HasOne(d => d.OrderCodeNavigation)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.OrderCode)
                    .HasConstraintName("FK__OrderDeta__Order__656C112C");

                entity.HasOne(d => d.ProductCodeNavigation)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.ProductCode)
                    .HasConstraintName("FK__OrderDeta__Produ__66603565");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.ProductCode)
                    .HasName("PK__Products__2F4E024EDC5B017D");

                entity.Property(e => e.Cost).HasColumnType("money");

                entity.Property(e => e.Picture).HasMaxLength(50);

                entity.Property(e => e.ProductDescription).HasMaxLength(50);

                entity.Property(e => e.ProductName).HasMaxLength(50);

                entity.HasOne(d => d.CategoryCodeNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryCode)
                    .HasConstraintName("FK__Products__Catego__5EBF139D");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
