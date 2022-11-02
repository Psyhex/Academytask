using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ItemController : ControllerBase
	{
		private readonly DataContext _context;

		public ItemController(DataContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult<List<Item>>> Get()
		{
			return Ok(await _context.Items.ToArrayAsync());
		}
		[HttpGet("{id}")]
		public async Task<ActionResult<Item>> Get(int id)
		{
			var item = await _context.Items.FindAsync(id);
			if (item == null)
				return BadRequest("Item not found");
			return Ok(item);
		}

		[HttpPost]
		public async Task<ActionResult<List<Item>>> AddItem(Item item)
		{
			_context.Items.Add(item);
			await _context.SaveChangesAsync();

			return Ok(await _context.Items.ToListAsync());
		}
	}
}
